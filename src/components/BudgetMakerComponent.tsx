import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BudgetMakerComponent = () => {
  return (
    <div>
      <h1>Budget Maker</h1>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <form action="">
        <input type="text" name="budgetName" id="budgetName" />
        <input type="number" name="budgetAmount" id="budgetAmount" />
        <input type="text" name="budgetDetails" id="budgetDetails" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BudgetMakerComponent;
