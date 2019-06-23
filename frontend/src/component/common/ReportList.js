import React from 'react';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup'
import {Form ,Col ,Button  } from 'react-bootstrap';

const ReportList = (props ) => {
    console.log(":::::::::LIST1::::::::::::::" ); 
    console.log(props);
    console.log(":::::::::LIST2::::::::::::::" ); 

    return props.data.LIST?(
            <Table striped bordered hover size="sm" >
            <thead>
                <tr>
                    {
                        props.data.HEDER.map((item,i) => (
                            <th key={i} >{item}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.data.LIST.map((item,i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            {
                                Object.getOwnPropertyNames( props.data.LIST[0]).map((keyObj ,n) => {
                                    return (!keyObj.includes("id") && !keyObj.includes("__H")?(
                                                (props.data.EDITING===true && props.data.id===item["id"] )?(
                                                    <td key={n} onDoubleClick={() => props.onDoubleClick(item) } >


                                                        <Form.Group controlId={keyObj}> 
                                                            <Form.Control  value={props.data[keyObj]||''}  
                                                             onChange={props.onChange} />
                                                        </Form.Group>  


                                                    </td>
                                                ):(
                                                <td key={n} onDoubleClick={() => props.onDoubleClick(item) } > 
                                                    {item[keyObj]} 
                                                </td>)
                                                ):(null)
                                            )
                                })
                            }
                            <td>
                                <div >
                                   {
                                        (props.data.EDITING &&props.data.id === item["id"])?(  
                                            <Button size="sm" variant="success"  className="float-right"
                                            onClick={() => props.onUpdate(item.id)} >수정</Button>
                                        ):(
                                            <Button size="sm" variant="danger"  className="float-right" 
                                            onClick={() => props.onRemove(item.id)} >삭제</Button>
                                        )
                                    }

                                    <Button size="sm" variant="secondary"  className="float-right" style={{ marginRight: '5px' }}  
                                    onClick={() => props.onReset(item.id)} >취소</Button>

                                </div>
                            </td>
                        </tr>
                    ))
                }
                <tr>
                    <td></td>
                    <td>
                        <Form.Group controlId='f_gubun'> 
                            <Form.Control  onChange={props.onChange} onKeyPress={props.onKeyPress} value={props.data.f_gubun ||''}/>
                        </Form.Group>  
                    </td>
                    <td>
                        <Form.Group controlId='f_document_num'> 
                            <Form.Control  onChange={props.onChange} onKeyPress={props.onKeyPress} value={props.data.f_document_num ||''}/>
                        </Form.Group>  
                    </td>
                    <td>
                        <Form.Group controlId='f_title'> 
                            <Form.Control  onChange={props.onChange} onKeyPress={props.onKeyPress} value={props.data.f_title ||''}/>
                        </Form.Group>  
                    </td>
                    <td>
                        <Form.Group controlId='f_content'> 
                            <Form.Control  onChange={props.onChange} onKeyPress={props.onKeyPress} value={props.data.f_content ||''}/>
                        </Form.Group>  
                    </td>
                    <td>
                    <Button size="sm" variant="success"  className="float-right"
                            onClick={props.onCreate} >등록</Button>
                    <Button size="sm" variant="secondary"  className="float-right" style={{ marginRight: '5px' }}  
                            onClick={() => props.onReset('inputForm')} >취소</Button>
                    </td>                                        
                </tr>
            </tbody>
        </Table>
    ):(
        (   

            <Table striped bordered hover>
                <thead>
                     <tr>
                         {
                             props.data.HEDER.map((item,i) => (
                                 <th key={i}>{item}</th>
                             ))
                         }
                     </tr>
                 </thead>
                 <tbody>
                     <tr><td>NO DATA</td></tr>
                 </tbody>
            </Table>
        )
    
    );
}

export default ReportList;