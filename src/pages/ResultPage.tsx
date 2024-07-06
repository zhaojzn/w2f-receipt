import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface Item {
  name: string;
  order: string;
  amount: number;
  combined?: boolean;
  originalItems?: Item[];
}

interface ResponseData {
  [key: string]: {
    order: string;
    amount: number;
  };
}

const ResultPage = () => {
  const location = useLocation();
  const { response } = location.state as { response: ResponseData };

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (response) {
      const parsedItems = Object.entries(response).map(([name, details]) => {
        const detailItem = details as { order: string; amount: number }; // Type assertion
        return {
          name,
          order: detailItem.order || '',
          amount: detailItem.amount || 0,
        };
      });
      setItems(parsedItems);
    }
  }, [response]);

  const [taxRate, setTaxRate] = useState(0.08);
  const [tipRate, setTipRate] = useState(0.15);

  const calculateTotal = (item) => {
    const subtotal = item.amount;
    const tax = subtotal * taxRate;
    const tip = subtotal * tipRate;
    return subtotal + tax + tip;
  };

  const handleTaxRateChange = (e) => {
    setTaxRate(parseFloat(e.target.value) / 100);
  };

  const handleTipRateChange = (e) => {
    setTipRate(parseFloat(e.target.value) / 100);
  };

  const onDragStart = (event, index) => {
    event.dataTransfer.setData("draggedItemIndex", index);
  };

  const onDrop = (event, dropIndex) => {
    const draggedItemIndex = event.dataTransfer.getData("draggedItemIndex");
    if (draggedItemIndex === undefined) {
      return;
    }

    const draggedIndex = parseInt(draggedItemIndex, 10);
    if (draggedIndex === dropIndex) {
      return;
    }

    const updatedItems = [...items];
    const draggedItem = updatedItems[draggedIndex];
    const droppedItem = updatedItems[dropIndex];

    const combinedItem = {
      ...droppedItem,
      amount: droppedItem.amount + draggedItem.amount,
      order: `${droppedItem.order}, ${draggedItem.order}`,
      combined: true,
      originalItems: [...(droppedItem.originalItems || [droppedItem]), draggedItem],
    };

    updatedItems.splice(dropIndex, 1, combinedItem);
    updatedItems.splice(draggedIndex, 1);
    setItems(updatedItems);
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const separateItem = (index) => {
    const updatedItems = [...items];
    const itemToSeparate = updatedItems[index];

    if (itemToSeparate.combined && itemToSeparate.originalItems) {
      updatedItems.splice(index, 1, ...itemToSeparate.originalItems);
      updatedItems.sort((a, b) => a.name.localeCompare(b.name));
      setItems(updatedItems);
    }
  };

  const handleNameChange = (index, newName) => {
    const updatedItems = [...items];
    updatedItems[index].name = newName;
    setItems(updatedItems);
  };

  return (
    <div className="w-full p-4 sm:p-6">
      <Card>
        <CardHeader>
          <CardTitle>Split the Bill</CardTitle>
          <CardDescription>View the total amount owed.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 mb-6 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="tax-rate">Tax Rate:</Label>
              <Input
                id="tax-rate"
                type="number"
                min="0"
                max="100"
                value={taxRate * 100}
                onChange={handleTaxRateChange}
                className="w-20"
              />
              <span>%</span>
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="tip-rate">Tip Rate:</Label>
              <Input
                id="tip-rate"
                type="number"
                min="0"
                max="100"
                value={tipRate * 100}
                onChange={handleTipRateChange}
                className="w-20"
              />
              <span>%</span>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Order</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                  <TableHead className="text-right">Tax</TableHead>
                  <TableHead className="text-right">Tip</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow
                    key={index}
                    draggable
                    onDragStart={(event) => onDragStart(event, index)}
                    onDragOver={onDragOver}
                    onDrop={(event) => onDrop(event, index)}
                  >
                    <TableCell className="font-medium">
                      <Input
                        className='w-1/2'
                        type="text"
                        value={item.name}
                        onChange={(e) => handleNameChange(index, e.target.value)}
                      />
                    </TableCell>
                    <TableCell>{item.order}</TableCell>
                    <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
                    <TableCell className="text-right">${(item.amount * taxRate).toFixed(2)}</TableCell>
                    <TableCell className="text-right">${(item.amount * tipRate).toFixed(2)}</TableCell>
                    <TableCell className="text-right">${calculateTotal(item).toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      {item.combined && (
                        <Button variant="outline" size="sm" onClick={() => separateItem(index)}>
                          Separate
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter>
          <div className="grid gap-4 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-between font-bold">
              <div>Total:</div>
              <div>${items.reduce((total, item) => total + calculateTotal(item), 0).toFixed(2)}</div>
            </div>
            <Button variant="outline">Split Bill</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResultPage;
