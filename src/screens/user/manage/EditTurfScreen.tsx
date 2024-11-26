import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import { Container } from "../../../styles/styles";
import { UserContent, UserDashboardWrapper } from "../../../styles/user";
import UserMenu from "../../../components/user/UserMenu";
import Title from "../../../components/common/Title";
import { breakpoints, defaultTheme } from "../../../styles/themes/default";
import Grid from "@mui/material/Grid2";
import dayjs from 'dayjs';
import React, { useEffect, useState } from "react";
import TurfApi from "../../../api/TurfApi";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { LocationType } from "../../../components/map/data/Util";
import { TurfField } from "../../../utils/commonType";


const ManageTurfListWrapper = styled.div`
  .order-tabs-contents {
    margin-top: 40px;
  }
  .order-tabs-head {
    min-width: 170px;
    padding: 12px 0;
    border-bottom: 3px solid ${defaultTheme.color_whitesmoke};

    &.order-tabs-head-active {
      border-bottom-color: ${defaultTheme.color_outerspace};
    }

    @media (max-width: ${breakpoints.lg}) {
      min-width: 120px;
    }

    @media (max-width: ${breakpoints.xs}) {
      min-width: 80px;
    }
  }
`;

const EditTurf = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  const [dataTurf, setDataTurf] = useState<TurfField>({
    id: 0,
    name: "",
    description: "",
    images: [],
    rating: 0,
    address: "",
    location_lat: 0,
    location_lon: 0,
    status: "ENABLE",
    prices: [],
    createdAt: "16:23 10/17/2024",
    updatedAt: "16:23 10/17/2024"
  })

  const getTurfById = async (id: string) => {
    try {
      const res = await TurfApi.getTurfById(id)
      setDataTurf(res.data.data)  // Set the fetched data to the state
      console.log(res.data.data) // Log the fetched data to the console
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) {
      getTurfById(id); // Call the function with the 'id' parameter
    }
  }, [id]);

  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = async (values: typeof initialValues) => {
    if (priceOption.startTime.isAfter(priceOption.endTime)) {
      toast.error("End time must be after start time!");
      return;
    }
    const data = {
      "name": values?.name,
      "description": values.description,
      "address": values.address,
      "location_lat": 21.0223452,
      "location_lon": 105.7925185,
      "images": [values.image1, values.image2],
      "turfPrices": [
        {
          "startTime": `${priceOption.startTime.get("hour") < 10 ? "0" + priceOption.startTime.get("hour") : priceOption.startTime.get("hour")}:${priceOption.startTime.get("minute") < 10 ? "0" + priceOption.startTime.get("minute") : priceOption.startTime.get("minute")}:00`,
          "endTime": `${priceOption.endTime.get("hour") < 10 ? "0" + priceOption.endTime.get("hour") : priceOption.endTime.get("hour")}:${priceOption.endTime.get("minute") < 10 ? "0" + priceOption.endTime.get("minute") : priceOption.endTime.get("minute")}:00`,
          "price": Number.parseFloat(priceOption.price)
        }]
    }
    try {
      const res = await TurfApi.createTurf(data);
      if (res?.status === 201) {
        toast.success("Turf created successfully!")
        setTimeout(() => {
          window.location.reload()
        }, 2500)
      } else {
        toast.error(`Turf created fail! ${res?.data.message}`)
      }
    } catch (error) {
      console.log(error)
    }
  };

  const initialValues = {
    name: "",
    address: "",
    description: "",
    image1: "",
    image2: "",
  };

  const [priceOption, setPriceOption] = React.useState({
    startTime: dayjs('7:00:00 10/17/2024'),
    endTime: dayjs('7:00:00 10/17/2024'),
    price: "",
  })

  return (
    <ManageTurfListWrapper className="page-py-spacing">
      <ToastContainer
        autoClose={2000}
      />
      <Container>
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
            <Title titleText={"Turfs"} />
            <div className="order-tabs">
              <Grid container spacing={2}>
                <Grid size={10}>
                  <Box m="20px">
                    <Formik
                      onSubmit={handleFormSubmit}
                      initialValues={initialValues}
                      validationSchema={checkoutSchema}
                    >
                      {({
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                      }) => (
                        <form onSubmit={handleSubmit}>
                          <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                            sx={{
                              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                            }}
                          >
                            <TextField
                              fullWidth
                              variant="filled"
                              type="text"
                              label="Name"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={dataTurf.name}
                              name="name"
                              error={!!touched.name && !!errors.name}
                              helperText={touched.name && errors.name}
                              sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                              fullWidth
                              variant="filled"
                              type="text"
                              label="Address"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={dataTurf.address}
                              name="address"
                              error={!!touched.address && !!errors.address}
                              helperText={touched.address && errors.address}
                              sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                              fullWidth
                              variant="filled"
                              type="text"
                              label="Description"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={dataTurf.description}
                              name="description"
                              error={!!touched.description && !!errors.description}
                              helperText={touched.description && errors.description}
                              sx={{ gridColumn: "span 4" }}
                            />
                            {dataTurf.images.map((image, index) => {
                              return (
                                    <TextField key={index}
                                  fullWidth
                                  variant="filled"
                                  type="text"
                                  label="Image"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={image.url}
                                  name="image2"
                                  error={!!touched.image2 && !!errors.image2}
                                  helperText={touched.image2 && errors.image2}
                                  sx={{ gridColumn: "span 4" }}
                                />
                              )
                            })}
                          </Box>
                          <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                              Edit
                            </Button>
                          </Box>
                        </form>
                      )}
                    </Formik>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </ManageTurfListWrapper>
  );
};

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required name"),
  address: yup.string().required("required address"),
  image1: yup.string().required("required image"),
});


export default EditTurf;
