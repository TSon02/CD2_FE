// type Props = {};

// const Register = (props: Props) => {
//     return <div>Register</div>;
// };

// export default Register;

import { PageTop, SignInSocial } from '@/components/common';
import { LoginContainer } from '@/components/Login';
import { ROUTES } from '@/constants';
import { ClientLayout } from '@/layouts/client';
import { NextPageWithLayout } from '@/types/shared';
import { styled } from '@mui/material';

type Props = {};

const Login: NextPageWithLayout<Props> = (props) => {
    return (
        <>
            <PageTop
                title="Create New Customer Account"
                breadcrumbItems={[
                    {
                        href: ROUTES.HOME,
                        name: 'Home',
                    },
                    {
                        href: ROUTES.REGISTER,
                        name: 'Register',
                    },
                ]}
            />
            <Main className="main">
                <LoginP className="block-content">
                    <SignInSocial social="facebook" />
                    <SignInSocial social="google" />
                </LoginP>
                <LoginContainer></LoginContainer>
            </Main>
        </>
    );
};

Login.getLayout = (page) => {
    return <ClientLayout>{page}</ClientLayout>;
};

const LoginP = styled('div')`
    display: flex;
    justify-content: center;
    margin-bottom: 48px;
` 

const Main = styled('div')`
    max-width: 1200px;
    margin: 40px auto 0px;
` 

export default Login;

