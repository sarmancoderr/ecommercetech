import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { formatter } from "../utils";
import { LogoutButton } from "./components/LogoutButton";
import { UserBox } from "./components/UserBox";

export const metadata: Metadata = {
  title: 'Página de inicio'
}

export default function HomePage() {
  const stats = [
    {name: 'Products', value: 9},
    {name: 'Earnings', value: formatter.format(25208.2)},
    {name: 'Pending orders', value: 6},
    {name: 'Orders in progress', value: 1},
    {name: 'Orders sent', value: 0},
    {name: 'Delivered orders', value: 5},
  ]

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <LogoutButton />
      </div>
      <UserBox />
      <div className="mt-5">
        <div className="btn-vertical-group">
          <button className="btn block rounded-full custom-shadow">Delivery prices</button>
          <button className="btn block rounded-full custom-shadow">Send notification to all users</button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-center mt-5">
        {stats.map(stat => (
          <div key={stat.name} className={twMerge(
            "bg-primary-200",
            "py-10 rounded-lg",
            "custom-shadow",
            "cursor-pointer",
            "hover:bg-primary-50",
            "transition-all",
            "active:shadow"
          )}>
            <p className="font-bold text-2xl">{stat.value}</p>
            <p>{stat.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}
