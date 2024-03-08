<template>
    <H1>Fromulario De prueba</H1>
    <Form>
    
        <label for="name">nombre (4 a 8 caracteres):</label>
        <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" /><br>
        <label for="name">Boton radio: </label>
        <input type="radio" id="button" name="button" value="" /><br>
        <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Este es mi primer checkbox</label><br>
        <label for="name">contraseña:</label>
        <input type="password" placeholder="Enter your password" required minlength="6" maxlength="20" size="10"/><br>
        <label for="name">Ingrese numeros:</label>
        <input type="number" placeholder="ingrese numeros" /><br>
        <label for="name">Selecciona un archivo:</label>
        <input type="file" /><br>
        <label for="name">Seleccione un color:</label>
        <input type="color" /><br>
        <label for="name">Seleccione una fecha:</label>
        <input type="date" /><br>
        <label for="name">Escriba un mensaje:</label><br>
        <textarea cols="50" rows="20"></textarea><br>
        <select>
          <option value="HTML">Selecciona un lenguaje</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JavaScript">JavaScript</option>
          <option value="React">React</option>
    </select><br>
        <input type="submit" value="Enter to Win" /> <input type="reset" value="Reset" /> <input type="button" value="Button" />
    </Form>
    
    </template>
    