import React from "react";
import {Bodytopright} from './Body_Components/Bodytopright'
import "./css/Bodyleft.css";
import { Dropdown ,Card,Grid, Row,Text,Button} from "@nextui-org/react";
import { Bodyleftbottom } from "./Body_Components/Bodyleftbottom";


import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { LinearGradient } from "react-text-gradients";

export const MainBody = ({ name }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="Body_Main_left">
      <div className="Body_main_left_text">
        <h4>
          <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
            Welcome Back Kumaresh !
          </LinearGradient>
        </h4>
        <Box sx={{}}>
          <Tabs
            x={{}}
            selectionFollowsFocus
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab
              sx={{
                color: "#5a5c5e",
              }}
              label="Overview"
              href="/drafts"
            />
            <LinkTab
              sx={{
                color: "#5a5c5e",
              }}
              label="Transaction"
              href="/trash"
            />
            <LinkTab
              sx={{
                color: "#5a5c5e",
              }}
              label="Invoice"
              href="/spam"
            />
            <LinkTab
              sx={{
                color: "#5a5c5e",
              }}
              label="Statistics"
              href="/spam"
            />
          </Tabs>
        </Box>
      </div>

   {/* B a l a n c e */}
   <div className="Main_Body">

   <Grid.Container gap={2}>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Card Title</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Cancel
              </Button>
              <Button size="sm">Agree</Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Card Title</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" light>
                Share
              </Button>
              <Button size="sm" color="secondary">
                Learn more
              </Button>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
     
    </div>
     </div> 
    
  );
};




      {/* // <div className="Main_Body">
      
      // <div className="op"> */}
      {/* <Card isHoverable>
          <Card.Body>
      <div className="Top">
      
          <Text color="#5a5c5e" h5>
                Total Balance
              </Text>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  width="48px"
                  height="48px"
                >
                  <path
                    fill="#ff9800"
                    d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"
                  />
                  <path
                    fill="#d50000"
                    d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"
                  />
                  <path
                    fill="#ff3d00"
                    d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"
                  />
                </svg>
                <div className="number">
                  <Text>***3241</Text>
                </div>

                <Dropdown>
                  <Dropdown.Button light></Dropdown.Button>
                  <Dropdown.Menu color="" variant="shadow" aria-label="Actions">
                    <Dropdown.Item key="new">New Account</Dropdown.Item>
                    <Dropdown.Item key="copy">Remove Account</Dropdown.Item>
                    <Dropdown.Item key="edit">Edit Account</Dropdown.Item>
                    <Dropdown.Item key="delete" withDivider color="error">
                      Delete All Accounts
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className="Midlle">
              <Text h3>$32,456.00</Text>
            </div>
            <div className="Bottom">
               <Button size="sm" shadow color="success" auto>
          Transfer
        </Button>
        <Button size="sm" shadow color="gradient" auto>
          Request
        </Button> 
            </div>
            </Card.Body>
          </Card> 
          <div className=""></div>
          <Bodyleftbottom/>
        </div>      */}
      
            {/* <Card >
          <Card.Body>
            
        
            
          </Card.Body>
          </Card>
           */}
   
        
          {/*  */}




          {/* I AM grid right side  top*/}
          {/* <Card isHoverable>
          <Card.Body>
         

        <Bodytopright/>
        
          </Card.Body>
          </Card> */}
          
          
          {/* I AM grid left side  bottom*/}
         

  {/* I AM grid right side  bottom*/}
          {/* <Card isHoverable>
          <Card.Body>
          
          I AM grid right side  bottom
          </Card.Body>
          </Card> */}
        
   

        
         

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
