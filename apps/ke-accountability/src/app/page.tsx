'use client';
import { useGetMissingPeople } from '@ke-accountability/apisdk';
import { Card } from '@ke-accountability/ui-components';

export default function Index() {
  const { isLoading, data } = useGetMissingPeople();

  return (
    <div>
      {data?.map((person) => (
        <Card key={person.idNumber as string}>
          <h1>{person.firstName}</h1>
        </Card>
      ))}
    </div>
  );
}
