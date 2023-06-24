<script setup>
const currentPage = ref(1)
const pageSize = ref(10)

const emit = defineEmits(['page-changed'])
const props = defineProps({ totalItems: { type: Number, default: 0 } })

const totalPages = computed(() => Math.ceil(props.totalItems / pageSize.value))

const visiblePageNumbers = computed(() => {
  const maxVisiblePages = 5;
  const pageNumbers = [];
  let startPage = Math.max(currentPage.value - Math.floor(maxVisiblePages / 2), 1)
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages.value)

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1)
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i)
  }

  return pageNumbers
})

function goToPage(pageNumber) {
  if (pageNumber >= 1 && pageNumber <= totalPages.value) {
    currentPage.value = pageNumber;
    emit('page-changed', pageNumber);
  }
}
</script>
<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
          <a class="page-link shadow-none" href="#" aria-label="Previous" @click.prevent="goToPage(currentPage - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="pageNumber in visiblePageNumbers" :key="pageNumber" :class="{ 'disabled': pageNumber === currentPage }">
          <a class="page-link shadow-none" href="#" @click.prevent="goToPage(pageNumber)">{{ pageNumber }}</a>
        </li>
        <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
          <a class="page-link shadow-none" href="#" aria-label="Next" @click.prevent="goToPage(currentPage + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link disabled" href="#">
            Total de registros: {{ totalItems }}            
          </a>
        </li>
      </ul>
    </nav>
</template>