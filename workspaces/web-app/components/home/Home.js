import React, { useState, useEffect } from "react";
import { getCurrentlySignedUser } from "../../services/firebase";
import {
  Grid,
  Dropdown,
  Menu,
  Segment,
  List,
  Icon,
  Accordion
} from "semantic-ui-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

import moment from "moment";

import {
  HomeGrid,
  HeaderGridItem,
  FilterGridItem,
  ResultsGridItem,
  ChartsGridItem,
  FooterGridItem
} from "./HomeGrid";
import { AddAllocation } from "../allocations";
import { AllocationForm } from "../allocations";
import { AddAssignment } from "../assignments";
import { AddTeamMember } from "../team-members";
import { all } from "rsvp";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const yearOptions = [
  { key: "2018", value: "2018", text: "2018" },
  { key: "2019", value: "2019", text: "2019" }
];

const organisationOptions = [
  { key: "Department1", value: "Department1", text: "Department1" },
  { key: "Department2", value: "Department2", text: "Department2" }
];

const TeamMemberRow = props => (
    <p>{props.name}</p>
);

const Home = () => {
  const [activeItem, setActiveItem] = useState("All");
  const [filteredTeamMembers, setFilteredTeamMembers] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [allocations, setAllocations] = useState([]);

  const setListeners = () => {
    try {
      const uid = getCurrentlySignedUser();
      console.log("Setting Listeners");
      if (uid) {
        const db = firebase.firestore();
        db.collection("teamMembers").onSnapshot(snapshot => {
          const teamMembers =
            snapshot.docs && snapshot.docs.map(teamMember => teamMember.data());
          setTeamMembers(teamMembers);
        });
        db.collection("assignments").onSnapshot(snapshot => {
          const assignments =
            snapshot.docs && snapshot.docs.map(assignment => assignment.data());
          setAssignments(assignments);
        });
        db.collection("allocations").onSnapshot(snapshot => {
          const allocations =
            snapshot.docs && snapshot.docs.map(allocation => allocation.data());
          setAllocations(allocations);
        });
      } else {
        throw new Error(
          "Having trouble accesing Firebase. Please try again..."
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const uid = getCurrentlySignedUser();
    if (!initialized && uid) {
      console.log("Home component mounted");
      setInitialized(true);
      setListeners();
      // const weeknumber = moment("07-16-2019", "MM-DD-YYYY").week();
      // console.log(weeknumber);
      const testArray = Array(52).fill(0);
      console.log("testArray", testArray);
    }
  });

  const handleUserFilter = (e, { name }) => {
    if (name === "All") {
      setFilteredTeamMembers(allocations);
    }
    if (name === "Expected") {
      const filtered = allocations.filter(
        allocation => allocation.commitment === "Expected"
      );
      setFilteredTeamMembers(filtered);
    }
    setActiveItem(name)
  };

  return (
    <HomeGrid>
      <HeaderGridItem>
        <h1 css={{ color: "#ff00cc" }}>/&lt;malloc&gt;</h1>
      </HeaderGridItem>

      <FilterGridItem>
      <Accordion styled fluid>
      <Accordion.Title name="All" active={activeItem === 'All'} onClick={handleUserFilter}>
          <Icon name='dropdown' />
          Team Members
        </Accordion.Title>
        <Accordion.Content active={activeItem === 'All'}>
          {filteredTeamMembers && filteredTeamMembers.map((filteredTeamMembers, index) => (
            <TeamMemberRow key={index} {...filteredTeamMembers} />
            ))}
        </Accordion.Content>

        <Accordion.Title name="Expected"  active={activeItem === 'Expected'} onClick={handleUserFilter}>
          <Icon name='dropdown' />
          Expected Allocations
        </Accordion.Title>
        <Accordion.Content active={activeItem === 'Expected'}>
          {filteredTeamMembers && filteredTeamMembers.map((filteredTeamMembers, index) => (
              <TeamMemberRow key={index} {...filteredTeamMembers} />
              ))}
        </Accordion.Content>

        <Accordion.Title name="Free" active={activeItem === 'Free'} onClick={handleUserFilter}>
          <Icon name='dropdown' />
          Free Capacity
        </Accordion.Title>
        <Accordion.Content active={activeItem === 'Free'}>
          <p>
            List of team members
          </p>
        </Accordion.Content>
      </Accordion>
      </FilterGridItem>

      <ResultsGridItem>
        <Menu>
          <Menu.Menu position="right">
            <Menu.Item>
              <AddAssignment />
            </Menu.Item>
            <Menu.Item>
              <AddAllocation
                assignments={assignments}
                teamMembers={teamMembers}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <AllocationForm allocations={allocations} />
      </ResultsGridItem>

      <ChartsGridItem>
        <AreaChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="amt"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ChartsGridItem>

      <FooterGridItem css={{ color: "#ff00cc" }}>
        © 2019 by Malloc
      </FooterGridItem>
    </HomeGrid>
  );
};

export { Home };
