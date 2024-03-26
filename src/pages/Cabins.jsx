import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import { useState } from "react";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  // const cabins = useQuery({
  //   queryKey: ["cabins"],
  //   queryFn: getCabins(),
  // });

  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>
      <Row>
        <CabinTable />
      </Row>
      <Button
        sizes={"large"}
        variation={"primary"}
        onClick={() => setShowForm(!showForm)}
      >
        Add new cabin
      </Button>
      {showForm && <CreateCabinForm />}
    </>
  );
}

export default Cabins;
