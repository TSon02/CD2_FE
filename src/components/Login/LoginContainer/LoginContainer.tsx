import { Grid, styled, Typography } from "@mui/material"

import { ButtonLR } from "@/components/common"
import LoginForm from "../LoginForm"

function LoginContainer(){
    return <LoginContainerL>
               <Grid container >
                    <Grid item className="Registered" sm={6} sx={{padding:'0 48px 0 0',mb:'48px'}}>
                        <Typography variant="h5" fontWeight='600' mb='15px' lineHeight='42px' >Registered Customers</Typography>
                        <Text>If you have an account, sign in with your email address.</Text>
                        <LoginForm></LoginForm>
                    </Grid>
    
                    <Grid item className="Unregistered" sm={6} sx={{padding:'0 0 0 48px'}}>
                        <Typography variant="h5" fontWeight='600' mb='15px' lineHeight='42px'>Create an Account</Typography>
                        <Text>Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.</Text>
                        <ButtonLR content="Create an Account" width="sm"></ButtonLR>
                    </Grid>
               </Grid>
        </LoginContainerL>
}

const LoginContainerL = styled('div')`
    max-width: 60rem;
    margin: auto;

`

const Text = styled('p')`
    letter-spacing: normal;
    font-size: 1rem;
    color: #666666;
    margin-bottom: 20px;
    line-height: 28px;
`
export default LoginContainer