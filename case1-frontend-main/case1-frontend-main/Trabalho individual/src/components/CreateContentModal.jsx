import { Modal, Button, Form } from 'react-bootstrap'
function CreateContentModal(props) {
  return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.isModalOpen}>
        <Form onSubmit={(event) => {
          props.createContent(event)
        }}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Criar Lista</Modal.Title> 
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="filme">
            <Form.Label>
              Filme
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="genero">
            <Form.Label>
              Genero
            </Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="avaliacao">
            <Form.Label>
              Avaliação
            </Form.Label>
            <Form.Control type="number" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="dark" onClick={props.handleClose}>Close</Button>
          <Button variant="dark" type="submit">Salvar</Button>
        </Modal.Footer>
        </Form>
      </Modal >
    </div>
  )
}

export default CreateContentModal
