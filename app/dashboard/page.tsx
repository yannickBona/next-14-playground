import { Suspense } from "react";
import styled from "styled-components";
import SlowComponent from "../_components/SlowComponent";
import Loading from "./loading";

export default function Dashboard() {
  return (
    <section>
      Dashboard
      <br />
      <br />
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </section>
  );
}
