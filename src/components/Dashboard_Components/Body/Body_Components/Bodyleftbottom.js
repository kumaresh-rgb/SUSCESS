import React from "react";
import { BodyleftProps } from "../Body_Components/BodyleftProps";

import { AiFillCar } from "react-icons/ai";
import { GiPartyFlags } from "react-icons/gi";

import { RiMotorbikeFill } from "react-icons/ri";
import { Text ,Progress ,Button} from "@nextui-org/react";

export const Bodyleftbottom = () => {
  return (
    <div className="Body_left_Bottom">
      <Text h4>Savings Plans</Text>
    
        <BodyleftProps
          Icon={<AiFillCar size={20} />}
          name="Get new Car"
          Monthly_Saving="Monthly Savings : $100.00"
          Current_Dollor="$5,000"
          Target_Dollor="Target : $25,000,00"
          progress={
            <Progress
              value={50}
              size="sm"
              shadow
              color="primary"
              status="primary"
            />
          }
        />
     
     
        <BodyleftProps
          Icon={<GiPartyFlags size={20} />}
          name="Marriage Plan"
          Monthly_Saving="Monthly Savings :  $1000.00"
          Current_Dollor="$350.00"
          Target_Dollor="Target : $25,000,00"
          progress={
            <Progress
              value={30}
              size="sm"
              shadow
              color="primary"
              status="primary"
            />
          }
        />
      
        <BodyleftProps
          Icon={<RiMotorbikeFill size={20} />}
          name="Buy Mobile phone"
          Monthly_Saving="Monthly Savings : $1000.00"
          Current_Dollor="$800.00"
          Target_Dollor="Target : $25,000,00"
          progress={
            <Progress
              value={25}
              size="sm"
              shadow
              color="primary"
              status="primary"
            />
          }
        />
     
    </div>
  );
};
