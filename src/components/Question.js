import React, { useState } from "react";
import "./Question.css";
import Accordion from "@material-ui/core/Accordion";
import { AccordionDetails, AccordionSummary, Select, Typography, MenuItem, FormControlLabel, Radio, IconButton, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { CropOriginal, CheckBox, ViewHeadline, ShortText, ArrowDropDownCircle, Close, FilterNone, MoreVert } from "@material-ui/icons";
import { Switch } from "react-router-dom";

export default function Question(){
    const [questions, setQuestion] = useState(
        [{questionText : "제목없는 질문",
        questionType : "객관식질문",
        options : [
            {optionText : "옵션"},
        ],
    open : true,
    required : false}]
    )

    function questionUI(){
        return questions.map((ques, i) => (
            <div>
            <Accordion expanded={questions[i].open} className={questions[i].open ? 'add.border' : ""}>
                <AccordionSummary aria-controls="panelia-content" id="panelia-header" elevation={1} style={{width:'100%'}}>
                    {questions[i].open ? (
                        <div className="saved_questions">
                            <Typography style={{fontSize:"15px",fontWeight:"400",letterSpacing: '.1px',lineHeight:'24px',paddingBottom:"8px"}}> {i + 1}.{ques.questionText}</Typography>
                            {ques.options.map((op, j)=>(
                                 <div key={j} >
                                 <div style={{display: 'flex',}}>
                                  <FormControlLabel style={{marginLeft:"5px",marginBottom:"5px"}} disabled control={<input type={ques.questionType} color="primary" style={{marginRight: '3px', }} required={ques.type}/>} label={
                                      <Typography style={{fontFamily:' Roboto,Arial,sans-serif',
                                          fontSize:' 13px',
                                          fontWeight: '400',
                                          letterSpacing: '.2px',
                                          lineHeight: '20px',
                                          color: '#202124'}}>
                                        {ques.options[j].optionText}
                                      </Typography>
                                    } />
                                 </div>
                        </div>
                    ))}
                    </div>
                    ): ""}
                    </AccordionSummary>
                    <div className="question_boxes">
                        <AccordionDetails className="add_questions">
                            <div className="add_question_top">
                                <input type="text" className="question" placeholder="질문" value={ques.questionText}></input>
                                <CropOriginal style={{color:"gray"}}/>
                                <Select className="select" style={{color:"gray", fontSize:"13px"}}>
                                    <MenuItem id="ShortText" value="Text"><ShortText style={{marginRight:"10px", color:"gray"}} checked/>단답형</MenuItem>
                                    <MenuItem id="LongText" value="Text"><ViewHeadline style={{marginRight:"10px", color:"gray"}} checked/>장문형</MenuItem>
                                    <MenuItem id="checkBox" value="Checkbox"><CheckBox style={{marginRight:"10px", color:"gray"}} checked/>체크박스</MenuItem>
                                    <MenuItem id="radio" value="Radio"><Radio style={{marginRight:"10px", color:"gray"}} checked/>객관식 질문</MenuItem>
                                    <MenuItem id="radio" value="Radio"><ArrowDropDownCircle style={{marginRight:"10px", color:"gray"}} checked/>드롭다운</MenuItem>
                                </Select>
                            </div>
                            {ques.options.map((op, j) => (
                                <div className="add_question_body" key={j}>
                                    {
                                        (ques.questionType!="Text") ?
                                        <input type={ques.questionType} style={{marginRight:"10px"}}/> :
                                        <ShortText style={{marginRight:"10px"}}/>
                                    }
                                    <div>
                                        <input type="text" className="text_input" placeholder="option" value={ques.options[j].optionText}></input>
                                    </div>

                                    <CropOriginal style={{color : "gray"}}/>
                                    <IconButton aria-label="delete">
                                        <Close/>
                                    </IconButton>
                                </div>
                            ))}
                            <div className="add_footer">
                               <div className="add_question_bottom_left">
                        
                               <Button size="small" style={{textTransform: 'none',color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>       <ArrowDropDownCircle style={{border:"2px solid #4285f4", padding:"2px",marginRight:"8px"}} /> Answer key</Button>
                                 
                              </div>

                                <div className="add_question_bottom">
                                  
                                    <IconButton aria-label="Copy">
                                        <FilterNone/>
                                    </IconButton>
                                    
                                    <IconButton aria-label="delete"/>
                                    <IconButton>
                                        <MoreVert/>
                                    </IconButton>
                                </div>
                              </div>
                        </AccordionDetails>
                    </div>
            </Accordion>
            </div>
        ))
    }

    return(
        <div className="question_form">
            <br/>
            <div className="section">
                <div className="quesion_title_section">
                    <div className="question_form_top">
                        <input type="text" className="question_form_top_name" style={{color:"black"}} placeholder="제목 없는 설문지"></input>
                        <input type="text" className="question_form_top_desc" placeholder="설문지 설명"></input>
                    </div>
                </div>
                <br/>
                {questionUI()}
            </div>
        </div>
    )
}
