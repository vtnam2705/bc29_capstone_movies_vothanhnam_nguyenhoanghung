import React, { useState } from 'react'
import { LoaiGhe } from '../../enums/common';

import './movieSeat.scss'

export default function MovieChair(props) {
    const [isSelected, setIsSelected] = useState(false);

    const populateClass = () => {
        let defaultClass = 'ghe';

        if (props.item.loaiGhe === LoaiGhe.Vip) {
            defaultClass += ' gheVip'
        }

        if (isSelected) {
            defaultClass += ' dangDat'
        }

        if (props.item.daDat) {
            defaultClass += ' daDat';
        }
        return defaultClass;
    }

    return (
        <button
            disabled={props.item.daDat}
            onClick={() => {
                setIsSelected(!isSelected)
                props.handleSelect(props.item);
            }}
            className={populateClass()}
        >
            {props.item.tenGhe}
        </button>
    )
}
