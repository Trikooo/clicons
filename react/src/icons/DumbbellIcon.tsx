import React from 'react';
import config from '../config';

interface DumbbellIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DumbbellIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/dumbbell)
 * @see {@link https://clicons.dev/icon/dumbbell}
 */
const DumbbellIcon = React.forwardRef<SVGSVGElement, DumbbellIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7.73438 13.7323C7.73438 13.7323 8.63984 12.5102 9.23438 12.2319C11.0292 11.3915 11.3943 11.0263 12.2344 9.23091C12.5127 8.63618 13.7344 7.73044 13.7344 7.73044M10.2344 16.2331C10.2344 16.2331 11.4561 15.3273 11.7344 14.7326C12.5745 12.9373 12.9396 12.5721 14.7344 11.7317C15.3289 11.4533 16.2344 10.2312 16.2344 10.2312'
    }
  ],
  [
    'path',
    {
      d: 'M14.4311 2.89207C14.938 2.38343 15.7611 2.38212 16.2696 2.88916L21.0814 7.68726C21.5899 8.1943 21.5912 9.01767 21.0843 9.52632L19.5557 11.0603C19.0488 11.5689 18.2257 11.5702 17.7172 11.0632L12.9054 6.26507C12.397 5.75803 12.3957 4.93466 12.9025 4.42601L14.4311 2.89207Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.41377 12.9022C4.92065 12.3936 5.74376 12.3923 6.25225 12.8993L11.0641 17.6974C11.5725 18.2045 11.5738 19.0278 11.067 19.5365L9.53836 21.0704C9.03148 21.5791 8.20837 21.5804 7.69988 21.0733L2.88808 16.2752C2.37959 15.7682 2.37829 14.9448 2.88517 14.4362L4.41377 12.9022Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.9377 3.45254C19.8201 0.985467 23.14 3.8401 20.5431 6.02872M3.37811 17.9773C0.998473 19.9687 3.99782 23.1586 6.06742 20.4657'
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

DumbbellIcon.displayName = 'DumbbellIcon';
export default DumbbellIcon;
