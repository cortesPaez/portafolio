import styled from "styled-components"

export const FileListContainer = styled.div`
	display: flex;
`

export const Container = styled.div`
  background-color: #252526;
	width: 100%;


	@media (max-width: 538px) {
    width: 400px;
  }
`

export const FileListLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
`

export const FileListLabel = styled.div`
  font-size: 11px;
  color: #CCCCCC;
`

export const FolderDetail = styled.details`
  color: #CCCCCC;
  font-size: 11px;
  font-weight: 500;
`
