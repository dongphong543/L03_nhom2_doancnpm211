import React from "react";
import { Button, Divider, Input } from "antd"
import { useState } from "react"
import ClasContent from "./class_content"
const AddLecture = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    
    const onSubmit = (e) => { 
        e.preventDefault()
        if(!name) { 
            alert('Hãy nhập tên bài giảng') 
            return
        }
        onAdd({ name, link})
        setName('')
        setLink('') 
    }
        return (   
        <form onSubmit={onSubmit} >
            <Divider />
            <div>
                <label style={{ fontSize: "17px", color: "#1F468B", fontWeight: "bold"  }}>
                Tên bài giảng</label>
                <Input type="text" 
                    placeholder="Nhập tên bài giảng" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    style ={{ height: "35px", borderRadius: "5px" }}/>
            </div> <br/ >
            <div>
                <label style={{ fontSize: "17px", color: "#1F468B", fontWeight: "bold"  }}>
                    Link bài giảng</label>
                <Input type="link" 
                    placeholder="Nhập link bài giảng" 
                    value={link} 
                    onChange={(e) => setLink(e.target.value)}
                    style ={{ height: "35px", borderRadius: "5px" }}/>
            </div> <br />
            <Input type="submit" 
                value="Thêm bài giảng" 
                style ={{ 
                    backgroundColor: "#1F468B", 
                    color: "white", 
                    height: "35px", 
                    borderRadius: "5px", 
                    fontSize: "15px"}}
            />
        </form>
    )
}


export default AddLecture

