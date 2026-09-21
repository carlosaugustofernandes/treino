const form = document.getElementById("meuFormulario") as HTMLFormElement;
const nomeInput = document.getElementById("nomeInput") as HTMLInputElement;

form.addEventListener("submit", (event:SubmitEvent) => {
    event.preventDefault();

    const nome: string = nomeInput.value;
    alert(`Formulários enviado! Olá, ${nome}`);
    nomeInput.value = "";
});
