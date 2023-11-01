import * as React from "react";
import { useContext } from "react";
import { Route, Routes as MainRoutes, Navigate } from "react-router-dom";
import { DataContext } from "../helpers";

const DummyChart = React.lazy(() => import("../dummies/tabs/dummyChart"));
const DummyList = React.lazy(() => import("../dummies/tabs/dummyList"));
const DummyTable = React.lazy(() => import("../dummies/tabs/dummyTable"));

export default function Routes() {
  const components = {
    dummyChart: <DummyChart />,
    dummyList: <DummyList />,
    dummyTable: <DummyTable />,
  };
  const data = useContext(DataContext);

  const defaultPath = data.filter((el) => el.order === 0);

  return (
    <MainRoutes>
      {data.map((el) => {
        return (
          <Route
            path={el.path}
            element={<React.Suspense>{components[el.id]}</React.Suspense>}
            key={el.order}
          />
        );
      })}
      <Route path="/" element={<Navigate to={defaultPath[0].path} />} />
    </MainRoutes>
  );
}
