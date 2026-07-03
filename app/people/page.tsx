"use client";
import { useState } from "react";
import { people } from "../data/mock";
import { Menu, Button } from "@mantine/core";
import { IconArrowsSort, IconSortAZ, IconCalendarWeek } from '@tabler/icons-react';
import DataCard, { CardType } from "../components/DataCard";

enum SortType {
  Alphabetical,
  TimePeriod
}

export default function People() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(SortType.Alphabetical);

  // Cloned to not modify imported people list
  const peopleCards = people;


  function makePeopleCards()  {
      if (sortBy === SortType.Alphabetical) {
        return peopleCards.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((p, idx)=> <DataCard key={idx} name={p.name} caption={p.caption} imgURL={p.url} cardType={CardType.Person} />)
      }
      else {
        return peopleCards.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => a.data.yearRange.start - b.data.yearRange.start)
        .map((p, idx)=> <DataCard key={idx} name={p.name} caption={p.caption} imgURL={p.url} cardType={CardType.Person}  />)
      }
  }

  return (
    <div className="flex flex-col w-full justify-center items-center p-8 ">
      <div className="p-2">
        <input type="text" onChange={(e) => setSearch(e.target.value)} className="p-1 border-1 focus:outline-none focus:ring-0" />
        <Menu>
          <Menu.Target>
            <Button p={5} m={5} leftSection={<IconArrowsSort stroke={2} />}>SORT BY</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item leftSection={<IconSortAZ stroke={2} />} onClick={() => setSortBy(SortType.Alphabetical)}>Alphabetical</Menu.Item>
            <Menu.Item leftSection={<IconCalendarWeek stroke={2} />} onClick={() => setSortBy(SortType.TimePeriod)}>Time Period</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <div className="flex w-full justify-evenly flex-wrap">
          {makePeopleCards()}
      </div>
    </div>
  );
}
