Nombre: Jean Pierre Mora Santillán
Fecha:14/12/2025


# Blog Técnico con React y JSON Server

##  Descripción del Proyecto

Este proyecto consiste en el desarrollo de un **Blog Técnico y Hoja de Vida digital**, creado con **React** y conectado a una **API REST simulada usando JSON Server**. El objetivo principal es demostrar el uso práctico de conceptos fundamentales del desarrollo frontend moderno, como el consumo de APIs, el manejo de rutas y la estructuración de componentes.

La aplicación presenta dos secciones principales:

* **Hoja de Vida**: muestra información personal, estudios y habilidades técnicas.
* **Blog Técnico**: contiene posts relacionados con desarrollo de software, explicados de forma clara y sencilla

El proyecto está enfocado en la **claridad del código**, un **diseño limpio y legible**, y buenas prácticas básicas de React.

---

##  Objetivos del Proyecto

* Aplicar conocimientos de **React** en un proyecto real.
* Consumir datos desde una **API REST**.
* Implementar navegación entre vistas usando **React Router**.
* Simular un backend utilizando **JSON Server**.
* Diseñar una interfaz sencilla, moderna y fácil de usar.
* Reforzar el concepto de **CRUD** (Crear, Leer, Actualizar y Eliminar).

---

##  Tecnologías Utilizadas

* **React** (con Vite)
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Axios** (consumo de API)
* **React Router DOM** (navegación)
* **JSON Server** (API falsa)
* **GitHub** (control de versiones)

##  Instrucciones para Ejecutar el Proyecto

###  Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd frontend
```

---

###  Instalar dependencias

```bash
npm install
```

---

###  Ejecutar el proyecto React

```bash
npm run dev
```

La aplicación se ejecutará en:

```
http://localhost:5173
```

---

###  Ejecutar JSON Server

En otra terminal, dentro del mismo proyecto entranmos a cd backend

```bash
npx json-server --watch db.json --port 3000
```

La API estará disponible en:

```
http://localhost:3000
```

---

##  Endpoints utilizados

* `GET /experiencia` → Información personal
* `GET /posts` → Listado de artículos
* `GET /posts/:id` → Detalle de un artículo

Estos endpoints son consumidos desde React utilizando **Axios**.

---

##  Aprendizajes Obtenidos

* Uso de **useEffect** y **useState** para manejar datos asíncronos.
* Consumo de una API REST desde React.
* Organización del proyecto por componentes y páginas.
* Manejo de rutas dinámicas con React Router.
* Importancia del diseño para mejorar la experiencia del usuario.

---

##  Conclusión

Este proyecto demuestra cómo se puede construir una aplicación web funcional utilizando React y una API simulada. Es una base sólida para proyectos más grandes y sirve como introducción práctica al desarrollo frontend moderno.

El blog técnico, además de cumplir un objetivo académico, puede ser utilizado como parte de un **portafolio personal**.

---
