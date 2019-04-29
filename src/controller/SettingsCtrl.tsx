import * as editJsonFile from "edit-json-file";

export default class SettingsCtrl{

    public settings:any;

    constructor(){
        try{
            this.settings = editJsonFile(`/src/controller/initial.config.json`, {autosave: true});
            console.log(this.settings);
        }catch(err){

            console.log("Erro", err);
        }
    }

    public writeSetting = (path:string, value: any) => {
        try{
            this.settings.set(path, value);
            return true;
        }catch(err){
            console.error("[ERROR] Could't change setting "+path);
            console.log(err);
            return false;
        }
    }

    public getSetting = (path:string) => {
        try{
            return this.settings.get(path);
        }catch(err){
            console.log("err", err)
        }
    }


}