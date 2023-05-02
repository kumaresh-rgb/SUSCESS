import React from "react";
import "../css/Bodyprops.css";
import { BsThreeDots } from "react-icons/bs";
import { Text,Grid, Card } from "@nextui-org/react";

export const BodyleftProps = (props) => {
  return (
    <div className="Main">
      <Grid.Container gap={1} justify="center">
        <Grid xs>
          <Card isHoverable objectFit="cover" width="100%">
            <Card.Body>
              <div className="Top">
                <div className="left">
                <Card>
            <Card.Body>
              {props.Icon}
            </Card.Body>
          </Card>
          </div>
                <div className="centre">
                  <Text size={17} weight="bold">
                    {props.name}
                  </Text>
                  <Text size={11}>{props.Monthly_Saving}</Text>
                </div>
                <div className="right">
                  <BsThreeDots size={20} />
                </div>
              </div>
              <div className="Bottom_Div">
                <div className="bottom_left">
                  <Text size={17} weight="bold">
                    {props.Current_Dollor}
                  </Text>
                </div>
                <div className="botton_right">
                  <Text size={14}>{props.Target_Dollor}</Text>
                </div>
              </div>
              {props.progress}
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
};
