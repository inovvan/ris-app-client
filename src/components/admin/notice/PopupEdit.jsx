import { useState, useContext } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { GridActionsCellItem } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import styles from "./style.module.css";
import { Box } from "@mui/system";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AuthContext } from "../../../contexts/AuthContext";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { api } from "../../../axiosConfig";
import { MessageContext } from "../../../contexts/MessageContext.jsx";
import { Button, DialogContentText } from "@mui/material";

export default function PopupEdit(props) {
  const { auth } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const { changeData } = props;
  const { setMessage } = useContext(MessageContext);
  const [state, setState] = useState({
    noticeInfo: {
      river: "",
      site: "",
      date: "",
      cause1: false,
      cause2: false,
      cause3: false,
      content: "",
    },

    sites: [],
  });
  const rivers = auth.info.siteRivers;
  const sites = auth.info.siteGroups;

  const handleClick = (event) => {
    const notice = props.data.find((doc) => doc.id === props.id);

    const date = notice.date;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;

    setState((prevState) => ({
      noticeInfo: {
        ...notice,
        date: formattedDate,
      },
      sites: [...prevState.sites],
    }));
    setAnchorEl(event.currentTarget);
    setSites(notice.river);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const setSites = (river) => {
    // eslint-disable-next-line default-case
    switch (river) {
      case "Днепр":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.dnepr,
        }));
        break;
      case "Березина":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.berezina,
        }));
        break;
      case "Сож":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.soj,
        }));
        break;
      case "Неман":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.neman,
        }));
        break;
      case "Мухавец":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.muhavets,
        }));
        break;
      case "Днепро-Бугский канал":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.dnepBug,
        }));
        break;
      case "Пина":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.pina,
        }));
        break;
      case "Верхний участок реки Припять":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.upperPripyat,
        }));
        break;
      case "Припять":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.pripyat,
        }));
        break;
      case "Микашевичский канал":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.mikashevichskiCanal,
        }));
        break;
      case "Горынь":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.gorin,
        }));
        break;
      case "Западная Двина":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.zapDvina,
        }));
        break;
      case "Туровский затон":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.turovskiZaton,
        }));
        break;
      case "Августовский канал":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.avgustovskiCanal,
        }));
        break;
      case "Свислочь":
        setState((prevState) => ({
          noticeInfo: {
            ...prevState.noticeInfo,
          },
          sites: sites.svisloch,
        }));
        break;
    }
  };

  const sendForm = async (event) => {
    event.preventDefault();
    if (
      state.noticeInfo.river === "" ||
      state.noticeInfo.site === "" ||
      state.noticeInfo.date === "" ||
      (state.noticeInfo.cause1 === false &&
        state.noticeInfo.cause2 === false &&
        state.noticeInfo.cause3 === false) ||
      state.noticeInfo.content === ""
    ) {
      setMessage(() => ({
        open: true,
        messageText: "Заполнены не все поля формы!",
        severity: "error",
      }));
    } else {
      try {
        let res = await api.post("/notices/change", state.noticeInfo);
        changeData(state.noticeInfo, props.id);
        setAnchorEl(null);
        setMessage(() => ({
          open: true,
          messageText: "Уведомелние успешно изменено",
          severity: "success",
        }));
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  const resetForm = (event) => {
    event.preventDefault();
    setState({
      noticeInfo: {
        river: "",
        site: "",
        date: "",
        cause1: false,
        cause2: false,
        cause3: false,
        content: "",
      },

      sites: [],
    });
  };

  const handleChangeCheckBox = (event) => {
    setState((prevState) => ({
      noticeInfo: {
        ...prevState.noticeInfo,
        [event.target.name]: event.target.checked,
      },
      sites: [...prevState.sites],
    }));
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setState((prevState) => ({
      noticeInfo: {
        ...prevState.noticeInfo,
        [name]: value,
      },

      sites: [...prevState.sites],
    }));
    if (name === "river") {
      setState((prevState) => ({
        noticeInfo: {
          ...prevState.noticeInfo,
          site: "",
        },

        sites: [...prevState.sites],
      }));
      setSites(value);
    }
  };

  return (
    <div>
      <GridActionsCellItem
        aria-describedby={props.id}
        icon={<EditIcon />}
        label="Edit"
        className="textPrimary"
        onClick={handleClick}
        color="inherit"
      />
      <Dialog fullWidth='true'  sx={{ '& .MuiDialog-paper': {  maxWidth: 750 } }} onClose={handleClose} open={open}>
        <DialogTitle sx={{ m: 0, p: 2 }}>
          Изменение уведомления
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
        
            <form className={styles.form} onSubmit={sendForm}>
              <TextField
                name="river"
                select
                label="Река"
                value={state.noticeInfo.river}
                onChange={handleChange}
                variant="standard"
                sx={{mb: 2}}
              >
                {rivers.map((river) => (
                  <MenuItem key={river} value={river}>
                    {river}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                name="site"
                select
                label="Участок реки"
                value={state.noticeInfo.site}
                onChange={handleChange}
                variant="standard"
                sx={{mb: 2}}
              >
                {state.sites.map((site) => (
                  <MenuItem key={site} value={site}>
                    {site}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                sx={{ width: 180 }}
                label="Дата"
                name="date"
                type={"datetime-local"}
                value={state.noticeInfo.date}
                onChange={handleChange}
                variant="standard"
              />

              <FormControl
                sx={{ mt: 3, ml: 1, width: 240 }}
                component="fieldset"
                variant="standard"
              >
                <FormLabel sx={{ mb: 1 }} component="legend">
                  Причина уведомления
                </FormLabel>
                <FormGroup>
                  <FormControlLabel
                    sx={{ mb: 1 }}
                    control={
                      <Checkbox
                        checked={state.noticeInfo.cause1}
                        onChange={handleChangeCheckBox}
                        name="cause1"
                      />
                    }
                    label="Изменение СНО"
                  />
                  <FormControlLabel
                    sx={{ mb: 1 }}
                    control={
                      <Checkbox
                        checked={state.noticeInfo.cause2}
                        onChange={handleChangeCheckBox}
                        name="cause2"
                      />
                    }
                    label="Метеологические условия"
                  />
                  <FormControlLabel
                    sx={{ mb: 1 }}
                    control={
                      <Checkbox
                        checked={state.noticeInfo.cause3}
                        onChange={handleChangeCheckBox}
                        name="cause3"
                      />
                    }
                    label="Опасно для жизни"
                  />
                </FormGroup>
              </FormControl>

              <TextField
                name="content"
                label="Содержание"
                value={state.noticeInfo.content}
                onChange={handleChange}
                multiline
                rows={4}
              />

              <Box className={styles.buttonsConteiner}>
                <Button
                  variant="contained"
                  className={styles.button}
                  type="submit"
                >
                  Изменить
                </Button>

                <Button
                  variant="contained"
                  className={styles.button}
                  onClick={resetForm}
                >
                  Очистить
                </Button>
              </Box>
            </form>
        
        </DialogContent>
      </Dialog>
    </div>
  );
}
