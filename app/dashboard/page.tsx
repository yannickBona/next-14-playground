import { Suspense } from "react";
import SlowComponent from "../_components/SlowComponent";
import Loading from "./loading";
import ErrorComponent from "../_components/ErrorComponent";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./error";

export default function Dashboard() {
  return (
    <section>
      Dashboard
      <br />
      <br />
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={<p>Error falalback</p>}>
          <ErrorComponent />
        </ErrorBoundary>
      </Suspense>
    </section>
  );
}
