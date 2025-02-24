import { Categories, SortPopup } from "@/src/shared/components"
import { Container } from "@/src/shared/ui"

const TopBar = () => {
  return (
    <div className={'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 s-10'}>
        <Container className="flex items-center justify-between">
            <Categories />
            <SortPopup />
        </Container>
    </div>
  )
}

export default TopBar