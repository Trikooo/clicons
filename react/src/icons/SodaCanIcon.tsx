import React from 'react';
import config from '../config';

interface SodaCanIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SodaCanIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/soda-can)
 * @see {@link https://clicons.dev/icon/soda-can}
 */
const SodaCanIcon = React.forwardRef<SVGSVGElement, SodaCanIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.92711 3.88746L6.90031 2.71963C7.1952 2.36576 7.34265 2.18882 7.54422 2.09441C7.74579 2 7.97611 2 8.43675 2H15.5633C16.0239 2 16.2542 2 16.4558 2.09441C16.6574 2.18882 16.8048 2.36576 17.0997 2.71963L18.0729 3.88746C18.5317 4.43802 18.7611 4.7133 18.8805 5.04325C19 5.3732 19 5.73153 19 6.4482V17.5518C19 18.2685 19 18.6268 18.8805 18.9568C18.7611 19.2867 18.5317 19.562 18.0729 20.1125L16.7998 21.6402C16.6524 21.8171 16.5787 21.9056 16.4779 21.9528C16.3771 22 16.2619 22 16.0316 22H7.96837C7.73805 22 7.6229 22 7.52211 21.9528C7.42132 21.9056 7.3476 21.8171 7.20015 21.6402L5.92711 20.1125C5.46831 19.562 5.23891 19.2867 5.11946 18.9568C5 18.6268 5 18.2685 5 17.5518V6.4482C5 5.73153 5 5.3732 5.11946 5.04325C5.23891 4.7133 5.46831 4.43802 5.92711 3.88746Z'
    }
  ],
  [
    'path',
    {
      d: 'M5 5L19 5'
    }
  ],
  [
    'path',
    {
      d: 'M5 19H19'
    }
  ],
  [
    'path',
    {
      d: 'M6 2H18'
    }
  ],
  [
    'circle',
    {
      cx: '12',
      cy: '12',
      r: '2.5'
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

SodaCanIcon.displayName = 'SodaCanIcon';
export default SodaCanIcon;
