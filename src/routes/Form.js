import "./about.css";
import { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

function f0rm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
      handlefShow();
    }

    setValidated(true);
  };
  const [show, setShow] = useState(false);
  const [byeongsin, setByeongsin] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const webhookURL = process.env.REACT_APP_DISCORD_WEBHOOK;
  const [fakeaccept, setFakeAccept] = useState(false);
  const discordname = useRef();
  const discordid = useRef();
  const robloxid = useRef();
  const groupname = useRef();
  const grouptype = useRef();
  const grouplink = useRef();
  const members = useRef();
  const reason = useRef();

  useEffect(() => {
    console.log(grouptype.current.value);
    if (grouptype.current.value == "조직") {
      setByeongsin(true);
    } else {
      setByeongsin(false);
    }
  }, [grouptype]);

  const handlefClose = () => setFakeAccept(false);
  const handlefShow = () => {
    setFakeAccept(true);

    (async () => {
      const messageData = {
        content: "동맹신청하는 개망겜찾음ㅉ",
        embeds: [
          {
            title: `응일단망겜임ㅉ`,
            description: `디스코드 이름 : ${discordname.current.value}\n디스코드 ID :${discordid.current.value}\n  로블록스 이름 : ${robloxid.current.value}\n 신청 그룹 이름 : ${groupname.current.value}\n 그룹 종류 : ${grouptype.current.value}\n 그룹 링크 : ${grouplink.current.value}\n 그룹 인원수 : ${members.current.value}\n 동맹 신청 사유 : ${reason.current.value}`,
          },
        ],
      };
      axios
        .post(webhookURL, messageData)
        .then((response) => {
          console.log("웹훅 전송 성공:", response.data);
          discordname.current.value = "";
          discordid.current.value = "";
          robloxid.current.value = "";
          groupname.current.value = "";
          grouptype.current.value = "";
          grouplink.current.value = "";
          members.current.value = "";
          reason.current.value = "";
        })
        .catch((error) => {
          console.error("웹훅 전송 실패:", error);
        });
    })();
  };

  return (
    <>
      <Modal show={fakeaccept} onHide={handlefClose}>
        <Modal.Header closeButton>
          <Modal.Title>신청 완료</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          동맹이 수락되면 삼맥부대 주인이 연락할 겁니다. 동맹신청서 보라고
          재촉하면 자동으로 거절됩니다. 이점에 유의해 주세요.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handlefClose}>
            깜사합니다.
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show} onHide={handlefClose}>
        <Modal.Header closeButton>
          <Modal.Title>삼맥 동맹 약관</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          MIT License Copyright (c) 2023 ATMWeb Permission is hereby granted,
          free of charge, to any person obtaining a copy of this software and
          associated documentation files ATMWeb, to deal in the Software without
          restriction, including without limitation the rights to use, copy,
          modify, merge, publish, distribute, sublicense, and/or sell copies of
          the Software, and to permit persons to whom the Software is furnished
          to do so, subject to the following conditions: The above copyright
          notice and this permission notice shall be included in all copies or
          substantial portions of the Software. <br />
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            이해했음
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="form__container">
        <h3>삼맥부대 공식 동맹 신청서</h3>
        <Alert variant="danger" show={byeongsin}>
          혹시 당신의 그룹이 코브라,킹스맨,골드문 같은 조직인가요? 썩~
          꺼져주세요.
        </Alert>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>디스코드 이름</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue=""
                placeholder="Hixel#6280"
                ref={discordname}
              />
              <Form.Control.Feedback>좋습니다!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>디스코드 고유번호</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="1018490419753005106"
                ref={discordid}
              />
              <Form.Control.Feedback>좋습니다!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>로블록스 이름</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  aria-describedby="inputGroupPrepend"
                  placeholder="5555wwuw"
                  required
                  ref={robloxid}
                />
                <Form.Control.Feedback type="invalid">
                  이름을 입력해주세요ㅉ
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>신청 그룹 이름</Form.Label>
              <Form.Control type="text" required ref={groupname} />
              <Form.Control.Feedback type="invalid">
                동맹을 신청할 그룹 이름을 왜안씀ㅉ.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>그룹 종류</Form.Label>
              <Form.Control
                type="text"
                placeholder="조직/군대 등"
                required
                ref={grouptype}
              />
              <Form.Control.Feedback type="invalid">
                왜안써ㅉ
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>신청 그룹 링크</Form.Label>
              <Form.Control type="text" required ref={grouplink} />
              <Form.Control.Feedback type="invalid">
                링크달아 ㅉ
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label>신청 그룹 인원수</Form.Label>
              <Form.Control
                type="text"
                placeholder="1명"
                ref={members}
                required
              />
              <Form.Control.Feedback type="invalid">
                왜안써ㅉ
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="13" controlId="validationCustom03">
              <Form.Label>동맹 신청 사유</Form.Label>
              <Form.Control type="text" required ref={reason} />
              <Form.Control.Feedback type="invalid">
                써야알지ㅉ
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="동맹 신청 약관에 동의합니다."
              feedback="동의해야지 신청하지ㅉ"
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">신청 하기</Button>{" "}
          <Button variant="danger" onClick={handleShow}>
            약관 보기
          </Button>
        </Form>
      </div>
    </>
  );
}

export default f0rm;
