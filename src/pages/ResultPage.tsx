import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"



const ResultPage = () => {
  const location = useLocation();
  const { response } = location.state;

  const [items, setItems] = useState([
    {
      name: "John Doe",
      order: "Burger, Fries, Soda",
      amount: 25.99,
    },
    {
      name: "Jane Smith",
      order: "Salad, Water",
      amount: 12.5,
    },
    {
      name: "Bob Johnson",
      order: "Pizza, Beer",
      amount: 18.75,
    },
  ])
  const [taxRate, setTaxRate] = useState(0.08)
  const [tipRate, setTipRate] = useState(0.15)
  const calculateTotal = (item) => {
    const subtotal = item.amount
    const tax = subtotal * taxRate
    const tip = subtotal * tipRate
    return subtotal + tax + tip
  }
  const handleTaxRateChange = (e) => {
    setTaxRate(parseFloat(e.target.value) / 100)
  }
  const handleTipRateChange = (e) => {
    setTipRate(parseFloat(e.target.value) / 100)
  }

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
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>{item.order}</TableCell>
                    <TableCell className="text-right">${item.amount.toFixed(2)}</TableCell>
                    <TableCell className="text-right">${(item.amount * taxRate).toFixed(2)}</TableCell>
                    <TableCell className="text-right">${(item.amount * tipRate).toFixed(2)}</TableCell>
                    <TableCell className="text-right">${calculateTotal(item).toFixed(2)}</TableCell>
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