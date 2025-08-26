import * as React from "react";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import koLocale from "date-fns/locale/ko";

export default function TimePickers({selected, setSelected}){
    const handleChange = (newValue) => {
        setSelected(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
            <TimePicker
              label="시간 선택"
              value={selected}
              onChange={handleChange}
              ampm
              slotProps={{
                textField : {
                    fullWidth: true,
                    sx : {width: 420,
                        // 기본 테두리 색상
                    },
                    placeholder: "오전 10:00",
                    onKeyDown: (e) => e.preventDefault()
                }
              }}
              />
        </LocalizationProvider>
    );
}