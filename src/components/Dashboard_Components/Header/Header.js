import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiChat } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { Input } from "@nextui-org/react";
import { MdOutlineNotifications } from "react-icons/md";
import {
  Button,
  Modal,
  useModal,
  Tooltip,
  Dropdown,
  Text,
  User,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import { SunIcon } from "./DarkMode/Sun";
import { MoonIcon } from "./DarkMode/MoonIcon";

// rom 'notistack';
import "./css/Header.css";

export const Header = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const { setVisible, bindings } = useModal();

  const prevent = (e) => {

    e.preventDefault();
};

// // MUI 
// const { enqueueSnackbar } = useSnackbar();

  // const handleClick = () => {
  //   enqueueSnackbar('I love snacks.');
  // };



  return (
    <div className="Header_Main">
      <div className="Header_Left">
        <Tooltip
          placement="rightEnd"
          rounded
          trigger="hover"
          color="primary"
          content={"Home"}
        >
          <BiHomeAlt2 size={30} />
        </Tooltip>
      </div>
      <div className="Header_center">
        <form onSubmit={prevent}>
          <Input placeholder="Comming Soon" />

        </form>
        <div className="Header_center_icon">
          <Button auto flat onPress={() => setVisible(true)}>
            <Tooltip
              placement="bottom"
              rounded
              color="primary"
              content={"Community Chat"}
            >
              <BiChat size={30} />
            </Tooltip>
          </Button>
          <Modal
            scroll
            fullScreen
            closeButton
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                Modal with a lot of content
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Text id="modal-description">
                Cras mattis consectetur purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, purus sit amet fermentum. Cras justo
                odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Praesent
                commodo cursus magna, vel scelerisque nisl consectetur et. Cras
                mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet fermentum. Cras justo odio, dapibus
                ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et.
              </Text>
            </Modal.Body>
            <Modal.Footer>
              <Button flat auto color="error" onPress={() => setVisible(false)}>
                Close
              </Button>
              <Button onPress={() => setVisible(false)}>Agree</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div className="Header_right">
        <div className="Header_right_compo">
          <Tooltip
            placement="bottom"
            rounded
            color="primary"
            content={"Upload File"}
          >
            <FiUpload size={27} />
          </Tooltip>
          <MdOutlineNotifications size={30} />
          <Switch
            checked={isDark}
            size="md"
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
          <Dropdown placement="bottom-left">
            <Dropdown.Trigger>
              <User
                bordered
                as="button"
                size="md"
                zoomed
                pointer
                // color="primary"
                // name="Tony Reichert"
                // description="@tonyreichert"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
            </Dropdown.Trigger>
            <Dropdown.Menu
              color="primary"
              disabledKeys={["Mode"]}
              aria-label="Example with disabled actions"
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="Mode" withDivider>
                {type}
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error" withDivider>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};
