import { Button } from "./Button";

export function Forms() {
    const nothing = ' '
    return (
      <div>
        <label htmlFor="text">{nothing}</label>
        <input type="text" id="text" />
        <div>
            <label htmlFor="tel">{nothing}</label>
            <input type="tel" id="tel" />
            <label htmlFor="email">{nothing}</label>
            <input type="text" id="email" />
        </div>
        <div>
        <label htmlFor="drop">{nothing}</label>
            <select name="" id="drop">
                <option value="1">oi</option>
                <option value="2">oie</option>
                <option value="3">oiee</option>
                <option value="4">oioioi</option>
            </select>
            <label htmlFor="textArea">{nothing}</label>
            <textarea id="textArea" cols={30} rows={10}></textarea>
        </div>
        <Button/>
      </div>
    );
  }