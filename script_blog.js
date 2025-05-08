function navigateToPost(button) {
    const card = button.closest('.card-container');
    const postName = card.dataset.blogItem;
    window.location.href = `blog-posts/${postName}.html`;
}