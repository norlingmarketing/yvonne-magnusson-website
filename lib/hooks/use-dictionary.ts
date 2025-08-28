'use client';

import { useMemo } from 'react';
import type { Dictionary } from '@/lib/dictionaries';

interface UseDictionaryProps {
  dictionary: Dictionary;
}

export function useDictionary({ dictionary }: UseDictionaryProps) {
  const dict = useMemo(() => dictionary, [dictionary]);
  
  return dict;
}