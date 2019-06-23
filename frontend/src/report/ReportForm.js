import React from 'react';
import {Form ,Col ,Button  } from 'react-bootstrap';


const ReportForm = ({value, onChange, onCreate, onKeyPress ,onUpdate ,onReset ,selectOption}) => {
    
  return (
    <Form > 
        <Form.Row>
            <Form.Group as={Col} controlId="gubun">
            {/* <Form.Label>구분</Form.Label> */}
            <Form.Control as="select" onChange={onChange} value={value.gubun||''} >
                {/* <option value='' >선택</option>
                <option value='CRESYS' selected={ value.gubun=='CRESYS'?'true':'' }>CRESYS</option>
                <option value='LMS'    selected={ value.gubun=='LMS'?'true':'' }>LMS</option>
                <option value='MIS'    selected={ value.gubun=='MIS'?'true':'' }>MIS</option> */}
                {selectOption}
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="document_num">
            {/* <Form.Label>문서번호</Form.Label> */}
            <Form.Control placeholder="문서번호"  onChange={onChange} onKeyPress={onKeyPress} value={value.document_num ||''}/>
            </Form.Group>
        </Form.Row>

        <Form.Group controlId="title">
            <Form.Control placeholder="제목(요청사항)" onChange={onChange} onKeyPress={onKeyPress} value={value.title ||''} />
        </Form.Group>

        <Form.Group controlId="content">
            <Form.Control placeholder="내용(처리내용)" onChange={onChange} onKeyPress={onKeyPress} value={value.content ||''} />
        </Form.Group>
 
        {/* 
        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
          <Button variant="primary" className="float-right" style={{ marginBottom: '20px' }}  onClick={onCreate}> 
        */}
        {value.EDITING?(
                <div>
                    <Button variant="success"  className="float-right" style={{ marginBottom: '20px' }}  onClick={onUpdate} > 
                    수정
                    </Button>
                    <Button variant="primary"  className="float-right" style={{ marginBottom: '20px' , marginRight: '10px'  }}  
                       type="reset"   onClick={onReset}> 
                    취소
                    </Button>
                </div>
            ):(
                <Button variant="primary" className="float-right" style={{ marginBottom: '20px' }}  onClick={onCreate}  > 
                저장
                </Button>
             
            )
        }
  
     
        <br/>
    </Form>
  );
};

export default ReportForm;