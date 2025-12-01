const header = document.getElementById("navBar");

header.className =
    "navbar navbar-expand-lg py-3 custom-navbar";

header.innerHTML = `
<nav class="container d-flex align-items-center justify-content-between">
    <a class="navbar-brand fw-bold fs-3 logoText text-white" href="index.html">
        Osva<span class="text-primary">Dev</span>
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li class="nav-item"><a class="nav-link nav-link-custom text-white" href="#hero">Inicio</a></li>
            <li class="nav-item"><a class="nav-link nav-link-custom text-white" href="#portafolio">Portafolio</a></li>
            <li class="nav-item"><a class="nav-link nav-link-custom text-white" href="#acerca">Acerca de mí</a></li>
            <li class="nav-item"><a class="nav-link nav-link-custom text-white" href="#cv">CV</a></li>
            <li class="nav-item"><a class="nav-link nav-link-custom text-white" href="#blog">Blog</a></li>
        </ul>
    </div>
</nav>
`;
