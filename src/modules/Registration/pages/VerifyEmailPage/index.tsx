import styled from "styled-components";
import { useAppSelector } from "app/hooks";
import { selectEmailAddress } from "../../registrationSlice";

import { Typography, message } from "antd";
import Logo from "components/Logo";
import MainLayout from "../../layouts/MainLayout";

const { Title, Text, Link } = Typography;

function VerifyEmailPage() {
  const emailAddress = useAppSelector(selectEmailAddress);

  function onResendEmail() {
    // TODO

    message.info("Confirmation email sent")
  }

  return (
    <S.VerifyEmailPage>
      <header className="VerifyEmailPage__header-block">
        <Logo />
      </header>

      <MainLayout as="main">
        <Title className="VerifyEmailPage__Title">
          Please verify your email address, {emailAddress}.
        </Title>

        <Text>
          Complete your signup through the email we sent to your email address.
          Didn't receive an email?{" "}
          <Link onClick={onResendEmail}>Resend email</Link>.
        </Text>
      </MainLayout>
    </S.VerifyEmailPage>
  );
}

const S = {} as any;

S.VerifyEmailPage = styled.div`
  .VerifyEmailPage__header-block {
    padding: 1.5rem 2rem;
    margin-bottom: 4rem;
  }

  .VerifyEmailPage__Title {
    margin-bottom: 3rem;
  }

  .VerifyEmailPage__Form {
    width: 32rem;

    @media (max-width: ${(p) => p.theme.breakpoint.tabletPortrait}) {
      width: 100%;
    }
  }
`;

export default VerifyEmailPage;
