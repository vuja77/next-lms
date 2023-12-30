"use client";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  LineChart,
  Legend,
  CartesianGrid,
  Tooltip,
  Line,
} from "recharts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function Chart() {
  type Payload = {
    value: number,
    length: number,
    [0]: any
  }
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active: number;
    payload: Payload;
    label: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border border-border rounded-md p-2 flex flex-row gap-2">
          <div>
            <p className="label">Today</p>
            <p className="label">{label+"h"}</p>
          </div>
          <div>
            <p className="label">Average</p>
            <p className="intro">{payload[0].value+"h"}</p>
          </div>
        </div>
      );
    }

    return null;
  };
  return (
    <ResponsiveContainer width="100%" height={150}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Tooltip content={<CustomTooltip active={0} payload={{
          value: 0,
          length: 0,
          0: undefined
        }} label={""}></CustomTooltip>} />
        <Line type="monotone" dataKey="pv" stroke="hsl(var(--primary))" />
        <Line type="monotone" dataKey="uv" stroke="hsl(var(--secondary))" />
      </LineChart>
    </ResponsiveContainer>
  );
}
