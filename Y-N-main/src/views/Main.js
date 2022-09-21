import Button from '@enact/sandstone/Button';
import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import LS2Request from '@enact/webos/LS2Request';
import { useState } from 'react';

const bridge = new LS2Request();

const Main = () =>{
	const [message, setMsg] = useState("test");
	function noticeServiceStart(){
		var lsRequest = {
			service:"luna://com.yn.app.service",
			method:"serviceStart",
			parameters: {subscribe:true},
			onSuccess: (msg) => {console.log(msg); setMsg(msg.reply); console.log("test")},
			onFailure: (msg) => {console.log(msg);},
		}
		bridge.send(lsRequest);
	}
	return (
		<div className='main'>
			<div className='sub'>
				<div className='title'>구성원이 배송품을 수령했습니까?</div>
				<div className='but'>
					<Button backgroundOpacity='transparent' size='small' onClick={noticeServiceStart}>예</Button>
					<Button backgroundOpacity='transparent' size='small'>{message}</Button>
				</div>
			</div>
		</div>
		
	)
}

export default Main;

