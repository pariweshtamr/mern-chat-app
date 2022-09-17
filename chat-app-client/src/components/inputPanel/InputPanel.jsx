import { InputPanelContainer } from "./InputPanelStyles"
import Attach from "../../assets/attach.png"
import Img from "../../assets/img.png"
import { IoMdSend } from "react-icons/io"

const InputPanel = () => {
  return (
    <InputPanelContainer>
      <div className="add">
        <img src={Attach} alt="" />
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
      </div>
      <input type="text" placeholder="Aa" />
      <div className="send">
        <button>
          <IoMdSend />
        </button>
      </div>
    </InputPanelContainer>
  )
}

export default InputPanel
