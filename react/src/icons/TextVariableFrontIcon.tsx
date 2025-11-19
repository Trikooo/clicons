import React from 'react';
import config from '../config';

interface TextVariableFrontIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name TextVariableFrontIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/text-variable-front)
 * @see {@link https://clicons.dev/icon/text-variable-front}
 */
const TextVariableFrontIcon = React.forwardRef<SVGSVGElement, TextVariableFrontIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.5 15H4.5M6 3V15M6 3C5.20721 3 4.18884 3.11448 3.37806 3.22723C3.03514 3.27492 2.86368 3.29877 2.71192 3.38287C2.39625 3.55779 2.1418 3.94131 2.04604 4.38652C2 4.60057 2 4.84482 2 5.33333M6 3C6.79279 3 7.81116 3.11448 8.62194 3.22723C8.96486 3.27492 9.13632 3.29877 9.28808 3.38287C9.60375 3.55779 9.8582 3.94131 9.95396 4.38652C10 4.60057 10 4.84482 10 5.33333'
    }
  ],
  [
    'path',
    {
      d: 'M19.5 15H16.5M18 3V15M18 3C17.2072 3 16.1888 3.11448 15.3781 3.22723C15.0351 3.27492 14.8637 3.29877 14.7119 3.38287C14.3963 3.55779 14.1418 3.94131 14.046 4.38652C14 4.60057 14 4.84482 14 5.33333M18 3C18.7928 3 19.8112 3.11448 20.6219 3.22723C20.9649 3.27492 21.1363 3.29877 21.2881 3.38287C21.6037 3.55779 21.8582 3.94131 21.954 4.38652C22 4.60057 22 4.84482 22 5.33333'
    }
  ],
  [
    'path',
    {
      d: 'M2 19H10'
    }
  ],
  [
    'path',
    {
      d: 'M14 19L22 19'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '19',
      r: '2'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

TextVariableFrontIcon.displayName = 'TextVariableFrontIcon';
export default TextVariableFrontIcon;
