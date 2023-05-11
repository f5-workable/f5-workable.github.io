const Logo = () => {
    return (
        <form method="post" enctype="multipart/form-data">
            {/* <div class="button">
                <label for="chooseFile">
                    파일 업로드
                </label>
            </div> */}
            <input type="file" id="chooseFile" name="chooseFile" accept="image/*" onchange="loadFile(this)" />
        </form>
    );
};

export default Logo;
