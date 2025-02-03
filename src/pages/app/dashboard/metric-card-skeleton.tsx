import { Skeleton } from '@/components/ui/skeleton.tsx';

function MetricCardSkeleton() {
  return (
    <>
      <Skeleton className="h-7 w-24 mt-1" />
      <Skeleton className="h-4 w-41" />
    </>
  );
}

export default MetricCardSkeleton;
