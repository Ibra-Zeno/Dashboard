import { FC } from "react";
import DashboardSkeleton from "../../ui/skeletons";

interface LoadingProps {}

const Loading: FC<LoadingProps> = ({}) => {
  return <DashboardSkeleton />;
};

export default Loading;
