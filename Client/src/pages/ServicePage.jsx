import {
  ServiceHero,
  ServiceProfessionals,
} from "../components/customer/index";

import { Loading, Error } from "../components/common/index";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchService } from "../util/http";
import { useLocation } from "react-router-dom";

const ServicePage = () => {
  const params = useParams();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [`service`, params.id],
    queryFn: ({ signal }) => fetchService({ signal, id: params.id }),
  });

  if (isLoading) {
    return <Loading />;
  }

  //rer
  if (isError) {
    return <Error error={error} />;
  }

  if (!data) {
    return <p>No data available</p>;
  }

  return (
    <>
      <ServiceHero title={data.title} description={data.description} />
      <ServiceProfessionals professionals={data.professionalServices} />
    </>
  );
};

export default ServicePage;
