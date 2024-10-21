import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BudgetList } from "@/app/budget/page";
import { Label } from "@/components/ui/label";

type Props = {
  budgetList: BudgetList[];
};

const BudgetTable = (props: Props) => {
  const { budgetList } = props;

  const totalAmount = budgetList.reduce(
    (total, budget) => total + budget.amount,
    0
  );

  return (
    <>
      <Table>
        <TableCaption>A list of your recent budget</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S. No.</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {budgetList.map((budget: BudgetList, index: number) => (
            <TableRow>
              <TableCell className="font-medium">BGT 00{index}</TableCell>
              <TableCell>{budget.name}</TableCell>
              <TableCell className="text-right">{budget.amount}</TableCell>
              <TableCell>
                <Label
                  className="p-1 rounded"
                  style={{
                    backgroundColor: budget.category_color,
                  }}
                  htmlFor="terms"
                >
                  {budget.category}
                </Label>
              </TableCell>
              <TableCell>{budget.details}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={3} className="text-right">
              {totalAmount}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default BudgetTable;
