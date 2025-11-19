import React from 'react';
import config from '../config';

interface KeyframesMultipleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name KeyframesMultipleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/keyframes-multiple)
 * @see {@link https://clicons.dev/icon/keyframes-multiple}
 */
const KeyframesMultipleIcon = React.forwardRef<SVGSVGElement, KeyframesMultipleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.4417 14.553L10.1358 17.2531C9.14121 18.4177 8.6439 19 8 19C7.3561 19 6.85879 18.4177 5.86418 17.2531L3.55829 14.553C2.51943 13.3366 2 12.7284 2 12C2 11.2716 2.51943 10.6634 3.55829 9.44699L5.86418 6.74694C6.85879 5.58231 7.3561 5 8 5C8.6439 5 9.14121 5.58231 10.1358 6.74694L12.4417 9.44699C13.4806 10.6634 14 11.2716 14 12C14 12.7284 13.4806 13.3366 12.4417 14.553Z'
    }
  ],
  [
    'path',
    {
      d: 'M13 19L16.5118 14.6032C17.5039 13.361 18 12.7398 18 12C18 11.2602 17.5039 10.639 16.5118 9.39683L13 5'
    }
  ],
  [
    'path',
    {
      d: 'M17 19L20.5118 14.6032C21.5039 13.361 22 12.7398 22 12C22 11.2602 21.5039 10.639 20.5118 9.39683L17 5'
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

KeyframesMultipleIcon.displayName = 'KeyframesMultipleIcon';
export default KeyframesMultipleIcon;
