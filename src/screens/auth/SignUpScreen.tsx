import styled from "styled-components";
import {
  FormGridWrapper,
  FormTitle,
} from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import AuthOptions from "../../components/auth/AuthOptions";
import { FormElement, Input } from "../../styles/form";
import PasswordInput from "../../components/auth/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { BaseButtonBlack } from "../../styles/button";
import { useState } from "react";
import { RegisterType } from "../../utils/commonType";
import TurfApi from "../../api/TurfApi";
import { toast, ToastContainer } from "react-toastify";

const SignUpScreenWrapper = styled.section`
  form {
    margin-top: 40px;
    .form-elem-text {
      margin-top: -16px;
      display: block;
    }
  }

  .text-space {
    margin: 0 4px;
  }
`;

const SignUpScreen = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<RegisterType>() 
  const [password, setPassword] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    if(!data || !password) {
      return;
    }
    setData({...data, password: password});
    console.log(data);
    try {
      const res = await TurfApi.signup(data!)
      if (res.status === 200) {
        toast.success('Sign up successful, please login')
        setTimeout(() => {
          navigate('/sign_in')
        }, 2500)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SignUpScreenWrapper>
      <ToastContainer autoClose={2000} />
      <FormGridWrapper onSubmit={handleSubmit}>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img
                src={staticImages.sign_up_messi}
                className="object-fit-cover"
                alt=""
              />
            </div>
            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign Up</h3>
                <p className="text-base">
                  Sign up for free to access to in any of our products
                </p>
              </FormTitle>
              <AuthOptions />
              <form>
                <FormElement>
                  <label htmlFor="" className="forme-elem-label">
                    First name
                  </label>
                  <Input
                    type="text"
                    placeholder=""
                    name=""
                    className="form-elem-control"
                    onChange={(e) => setData({...data!, firstName: e.target.value})}
                  />
                </FormElement>
                <FormElement>
                  <label htmlFor="" className="forme-elem-label">
                    Last name
                  </label>
                  <Input
                    type="text"
                    placeholder=""
                    name=""
                    className="form-elem-control"
                    onChange={(e) => setData({...data!, lastName: e.target.value})}
                  />
                </FormElement>
                <FormElement>
                  <label htmlFor="" className="forme-elem-label">
                    Email
                  </label>
                  <Input
                    type="text"
                    placeholder=""
                    name=""
                    className="form-elem-control"
                    onChange={(e) => setData({...data!, email: e.target.value})}
                  />
                </FormElement>
                <PasswordInput fieldName="Password" name="password" setPassword={setPassword}/>
                <BaseButtonBlack type="submit" className="form-submit-btn">
                  Sign Up
                </BaseButtonBlack>
              </form>
              <p className="flex flex-wrap account-rel-text">
                Already have an account?
                <Link to="/sign_in" className="font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignUpScreenWrapper>
  );
};

export default SignUpScreen;
