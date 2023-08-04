/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Context } from '@opentelemetry/api';
import { ReadableSpan, Span, SpanProcessor } from '@opentelemetry/sdk-trace-base';
import { getGlobalAttributes } from './utils';

/**
 * Implementation of the {@link SpanProcessor} that simply forwards all
 * received events to a list of {@link SpanProcessor}s.
 */
export class ContextAttributesProcessor implements SpanProcessor {
  onStart(span: Span, context: Context): void {
    const attributes = getGlobalAttributes();
    if (attributes) {
      for (const [k, v] of Object.entries(attributes)) {
        span.setAttribute(k, v);
      }
    }
  }

  onEnd(_span: ReadableSpan): void {}

  forceFlush(): Promise<void> {
    return Promise.resolve();
  }

  shutdown(): Promise<void> {
    return Promise.resolve();
  }
}
